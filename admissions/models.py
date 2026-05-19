from django.db import models  # type: ignore[reportMissingModuleSource]
from django.core.validators import FileExtensionValidator  # type: ignore[reportMissingModuleSource]
from schools.models import Program

class Application(models.Model):
    STATUS_CHOICES = [
        ('pending', 'Pending Review'),
        ('waitlist', 'On Waitlist'),
        ('approved', 'Approved'),
        ('enrolled', 'Enrolled'),
        ('rejected', 'Rejected'),
    ]
    
    # Child information
    child_first_name = models.CharField(max_length=50)
    child_last_name = models.CharField(max_length=50)
    date_of_birth = models.DateField()
    birth_certificate_number = models.CharField(max_length=50, blank=True)
    
    # Parent information
    parent_name = models.CharField(max_length=100)
    parent_email = models.EmailField()
    parent_phone = models.CharField(max_length=20)
    alternate_phone = models.CharField(max_length=20, blank=True)
    address = models.TextField()
    
    # Program selection
    program_applied = models.ForeignKey(Program, on_delete=models.PROTECT, related_name='applications')
    desired_start_date = models.DateField()
    
    # Additional info
    special_needs = models.TextField(blank=True, help_text="Any allergies, medical conditions, or learning needs")
    how_did_you_hear = models.CharField(max_length=100, blank=True, choices=[
        ('google', 'Google Search'),
        ('facebook', 'Facebook'),
        ('friend', 'Friend/Family'),
        ('flyer', 'Flyer/Brochure'),
        ('other', 'Other'),
    ])
    
    # Documents (use a separate model for multiple docs)
    birth_certificate = models.FileField(
        upload_to='applications/birth_certificates/',
        validators=[FileExtensionValidator(['pdf', 'jpg', 'png'])]
    )
    immunization_record = models.FileField(
        upload_to='applications/immunization/',
        validators=[FileExtensionValidator(['pdf', 'jpg', 'png'])],
        blank=True
    )
    parent_id = models.FileField(
        upload_to='applications/parent_ids/',
        validators=[FileExtensionValidator(['pdf', 'jpg', 'png'])],
        blank=True
    )
    
    # Status tracking
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    waitlist_position = models.PositiveIntegerField(null=True, blank=True, help_text="Auto-calculated")
    notes = models.TextField(blank=True, help_text="Internal staff notes")
    
    # Timestamps
    submitted_at = models.DateTimeField(auto_now_add=True)
    reviewed_at = models.DateTimeField(null=True, blank=True)
    reviewed_by = models.ForeignKey('auth.User', on_delete=models.SET_NULL, null=True, blank=True)
    
    class Meta:
        ordering = ['-submitted_at']
    
    def __str__(self):
        return f"{self.child_first_name} {self.child_last_name} - {self.program_applied} ({self.status})"
    
    def save(self, *args, **kwargs):
        # Auto-calculate waitlist position when status changes to 'waitlist'
        if self.status == 'waitlist' and not self.waitlist_position:
            last_waitlist = Application.objects.filter(
                program_applied=self.program_applied,
                status='waitlist'
            ).order_by('-waitlist_position').first()
            self.waitlist_position = (last_waitlist.waitlist_position + 1) if last_waitlist else 1
        super().save(*args, **kwargs)

class ApplicationComment(models.Model):
    """For staff to leave internal notes on applications"""
    application = models.ForeignKey(Application, on_delete=models.CASCADE, related_name='comments')
    user = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    comment = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        ordering = ['-created_at']

class Enquiry(models.Model):
    """For 'Book a Visit' or general enquiries"""
    parent_name = models.CharField(max_length=100)
    parent_email = models.EmailField()
    parent_phone = models.CharField(max_length=20)
    child_age = models.CharField(max_length=20, help_text="e.g., 3 years old")
    message = models.TextField()
    preferred_visit_date = models.DateField(null=True, blank=True)
    is_contacted = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"Enquiry from {self.parent_name} - {self.created_at.date()}"