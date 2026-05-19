from rest_framework import serializers  # type: ignore[import]
from .models import Application, Enquiry
from schools.models import Program

class ProgramSerializer(serializers.ModelSerializer):
    class Meta:
        model = Program
        fields = ['id', 'name', 'age_range', 'available_spots', 'registration_fee', 'tuition_fee']

class ApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Application
        fields = [
            'id', 'child_first_name', 'child_last_name', 'date_of_birth',
            'parent_name', 'parent_email', 'parent_phone', 'alternate_phone',
            'address', 'program_applied', 'desired_start_date',
            'special_needs', 'how_did_you_hear', 'status'
        ]
        read_only_fields = ['status', 'waitlist_position', 'submitted_at']

class EnquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = Enquiry
        fields = '__all__'
        read_only_fields = ['is_contacted', 'created_at']