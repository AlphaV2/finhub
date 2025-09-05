from django import forms
from .models import EarlyAccess

class EarlyAccessForm(forms.ModelForm):
    class meta:
        model=EarlyAccess
        fields=['email']


