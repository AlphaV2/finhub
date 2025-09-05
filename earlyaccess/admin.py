from django.contrib import admin
from .models import EarlyAccessUser

# Register your models here.

@admin.register(EarlyAccessUser)
class EarlyAccessAdmin(admin.ModelAdmin):
    list_display = ('email', 'created_at')
    search_fields = ('email',)