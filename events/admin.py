
from django.contrib import admin
from .models import Event

@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ['title', 'date', 'time', 'is_featured']
    list_filter = ['date', 'is_featured']
    search_fields = ['title']
    date_hierarchy = 'date'
