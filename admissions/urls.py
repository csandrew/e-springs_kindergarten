from django.urls import path
from . import views

app_name = 'admissions'

urlpatterns = [
    path('programs/', views.ProgramListView.as_view(), name='program-list'),
    path('applications/', views.ApplicationCreateView.as_view(), name='application-create'),
    path('enquiries/', views.EnquiryCreateView.as_view(), name='enquiry-create'),
]