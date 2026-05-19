from rest_framework import generics, status
from rest_framework.permissions import IsAuthenticated, AllowAny
from django.core.mail import send_mail
from django.conf import settings
from .models import Application, Enquiry
from .serializers import ApplicationSerializer, EnquirySerializer, ProgramSerializer
from schools.models import Program

class ProgramListView(generics.ListAPIView):
    """Public endpoint for available programs"""
    queryset = Program.objects.filter(is_active=True)
    serializer_class = ProgramSerializer
    permission_classes = [AllowAny]

class ApplicationCreateView(generics.CreateAPIView):
    """Parents submit application"""
    queryset = Application.objects.all()
    serializer_class = ApplicationSerializer
    permission_classes = [AllowAny]
    
    def perform_create(self, serializer):
        application = serializer.save()
        # Send confirmation email to parent
        send_mail(
            subject=f"Application Received - {application.child_first_name}",
            message=f"Dear {application.parent_name},\n\nWe've received your application for {application.program_applied}. We'll review it within 3 business days.\n\nReference: #{application.id}\n\nBest regards,\nKindergarten Team",
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[application.parent_email],
            fail_silently=True,
        )
        # Notify admin (you can add webhook or Celery later)
        send_mail(
            subject=f"New Application: {application.child_first_name}",
            message=f"A new application has been submitted for {application.program_applied}. Login to admin to review.",
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[settings.ADMIN_EMAIL],
            fail_silently=True,
        )

class EnquiryCreateView(generics.CreateAPIView):
    """Book a visit or general enquiry"""
    queryset = Enquiry.objects.all()
    serializer_class = EnquirySerializer
    permission_classes = [AllowAny]
