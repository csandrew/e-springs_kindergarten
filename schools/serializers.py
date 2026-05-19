
from rest_framework import serializers
from .models import Program, Teacher, Facility

class ProgramSerializer(serializers.ModelSerializer):
    class Meta:
        model = Program
        fields = ['id', 'name', 'description', 'age_range', 'available_spots', 'registration_fee', 'tuition_fee']

class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teacher
        fields = ['id', 'name', 'title', 'bio', 'photo', 'qualifications', 'years_experience', 'email']

class FacilitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Facility
        fields = ['id', 'name', 'facility_type', 'description', 'image']
