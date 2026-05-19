from django.contrib import admin
from django.utils.html import format_html
from .models import Application, Enquiry

@admin.register(Application)
class ApplicationAdmin(admin.ModelAdmin):
    list_display = ['child_first_name', 'child_last_name', 'program_applied', 'status', 'waitlist_position', 'submitted_at']
    list_filter = ['status', 'program_applied', 'submitted_at']
    search_fields = ['child_first_name', 'child_last_name', 'parent_email', 'parent_phone']
    list_editable = ['status']
    readonly_fields = ['submitted_at', 'waitlist_position']
    
    fieldsets = (
        ('Child Information', {'fields': ('child_first_name', 'child_last_name', 'date_of_birth', 'birth_certificate_number')}),
        ('Parent Information', {'fields': ('parent_name', 'parent_email', 'parent_phone', 'alternate_phone', 'address')}),
        ('Application Details', {'fields': ('program_applied', 'desired_start_date', 'special_needs', 'how_did_you_hear')}),
        ('Documents', {'fields': ('birth_certificate', 'immunization_record', 'parent_id')}),
        ('Status', {'fields': ('status', 'waitlist_position', 'notes', 'reviewed_by', 'reviewed_at')}),
    )
    
    actions = ['mark_as_enrolled', 'mark_as_waitlist']
    
    def mark_as_enrolled(self, request, queryset):
        queryset.update(status='enrolled')
    mark_as_enrolled.short_description = "Mark selected as Enrolled"
    
    def mark_as_waitlist(self, request, queryset):
        for app in queryset:
            app.status = 'waitlist'
            app.save()
    mark_as_waitlist.short_description = "Mark selected as Waitlist"

@admin.register(Enquiry)
class EnquiryAdmin(admin.ModelAdmin):
    list_display = ['parent_name', 'child_age', 'preferred_visit_date', 'is_contacted', 'created_at']
    list_filter = ['is_contacted', 'created_at']
    list_editable = ['is_contacted']