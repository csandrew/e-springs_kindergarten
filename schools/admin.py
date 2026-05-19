from django.contrib import admin  # type: ignore
from .models import Program, Teacher, Facility, SafetyMeasure

@admin.register(Program)
class ProgramAdmin(admin.ModelAdmin):
    list_display = ['name', 'capacity', 'enrolled_count', 'available_spots', 'is_active']
    list_editable = ['enrolled_count', 'is_active']
    list_filter = ['is_active']
    search_fields = ['name']
    fieldsets = (
        ('Basic Info', {'fields': ('name', 'description', 'age_range', 'order')}),
        ('Capacity', {'fields': ('capacity', 'enrolled_count')}),
        ('Fees', {'fields': ('registration_fee', 'tuition_fee')}),
        ('Schedule', {'fields': ('schedule',)}),
    )

@admin.register(Teacher)
class TeacherAdmin(admin.ModelAdmin):
    list_display = ['name', 'title', 'program', 'display_order', 'is_featured']
    list_filter = ['program', 'is_featured']
    search_fields = ['name', 'title']
    list_editable = ['display_order', 'is_featured']

@admin.register(Facility)
class FacilityAdmin(admin.ModelAdmin):
    list_display = ['name', 'facility_type', 'display_order']
    list_filter = ['facility_type']
    
@admin.register(SafetyMeasure)
class SafetyMeasureAdmin(admin.ModelAdmin):
    pass