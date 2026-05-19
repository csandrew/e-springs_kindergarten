from django.shortcuts import render
from rest_framework import generics
from rest_framework.permissions import AllowAny
from .models import Program, Teacher
from .models import Facility
from .serializers import ProgramSerializer, TeacherSerializer, FacilitySerializer

class ProgramListView(generics.ListAPIView):
    queryset = Program.objects.filter(is_active=True)
    serializer_class = ProgramSerializer
    permission_classes = [AllowAny]

class TeacherListView(generics.ListAPIView):
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer
    permission_classes = [AllowAny]

class FacilityListView(generics.ListAPIView):
    queryset = Facility.objects.all()
    serializer_class = FacilitySerializer
    permission_classes = [AllowAny]