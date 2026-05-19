'''
from django.urls import path

app_name = 'schools'
'''

from django.urls import path
from .views import ProgramListView, TeacherListView, FacilityListView

urlpatterns = [
    path('programs/', ProgramListView.as_view(), name='programs'),
    path('teachers/', TeacherListView.as_view(), name='teachers'),
    path('facilities/', FacilityListView.as_view(), name='facilities'),
]
