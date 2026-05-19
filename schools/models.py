from django.db import models
from django.core.validators import MinLengthValidator, MaxLengthValidator
from django.utils import timezone

class Program(models.Model):
    PROGRAM_TYPES = [
        ('baby', 'Baby Class (1.5-2.5 yrs)'),
        ('pp1', 'PP1 (3-4 yrs)'),
        ('pp2', 'PP2 (4-5 yrs)'),
        ('daycare', 'Daycare'),
        ('afterschool', 'After School Program'),
    ]
    
    name = models.CharField(max_length=50, choices=PROGRAM_TYPES, unique=True)
    description = models.TextField(help_text="What children learn in this class")
    age_range = models.CharField(max_length=50, help_text="e.g., 3-4 years")
    capacity = models.PositiveIntegerField(default=20)
    enrolled_count = models.PositiveIntegerField(default=0)  # Manual update or signal
    is_active = models.BooleanField(default=True)
    order = models.PositiveIntegerField(default=0, help_text="Display order on website")
    
    # Daily schedule (simple JSON field for flexibility)
    schedule = models.JSONField(default=dict, blank=True, help_text="e.g., {'monday': '9am-12pm'}")
    
    # Fee structure
    registration_fee = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    tuition_fee = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['order', 'name']
    
    def __str__(self):
        return f"{self.get_name_display()} (Capacity: {self.enrolled_count}/{self.capacity})"
    
    @property
    def has_available_spots(self):
        return self.enrolled_count < self.capacity
    
    @property
    def available_spots(self):
        return max(0, self.capacity - self.enrolled_count)

class Teacher(models.Model):
    name = models.CharField(max_length=100)
    title = models.CharField(max_length=100, help_text="e.g., Head Teacher, PP1 Lead")
    bio = models.TextField(max_length=500)
    photo = models.ImageField(upload_to='teachers/', blank=True, null=True)
    program = models.ForeignKey(Program, on_delete=models.SET_NULL, null=True, blank=True, related_name='teachers')
    qualifications = models.TextField(blank=True, help_text="Comma-separated: B.Ed, Montessori Certified, etc.")
    years_experience = models.PositiveIntegerField(default=0)
    email = models.EmailField(blank=True)
    phone = models.CharField(max_length=20, blank=True)
    display_order = models.PositiveIntegerField(default=0)
    is_featured = models.BooleanField(default=False)
    
    class Meta:
        ordering = ['display_order', 'name']
    
    def __str__(self):
        return f"{self.name} - {self.title}"

class Facility(models.Model):
    FACILITY_TYPES = [
        ('classroom', 'Classroom'),
        ('playground', 'Playground'),
        ('safety', 'Safety Feature'),
        ('medical', 'Medical Facility'),
        ('transport', 'Transport'),
    ]
    
    name = models.CharField(max_length=100)
    facility_type = models.CharField(max_length=50, choices=FACILITY_TYPES)
    description = models.TextField()
    icon = models.CharField(max_length=50, blank=True, help_text="FontAwesome icon name")
    image = models.ImageField(upload_to='facilities/', blank=True, null=True)
    display_order = models.PositiveIntegerField(default=0)
    
    class Meta:
        ordering = ['display_order']
    
    def __str__(self):
        return self.name

class SafetyMeasure(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    icon = models.CharField(max_length=50, blank=True)
    is_active = models.BooleanField(default=True)
    
    def __str__(self):
        return self.title