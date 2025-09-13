from rest_framework import serializers
from .models import EarlyAccessUser

class EarlyAccessSerializer(serializers.ModelSerializer):
    class meta:
        model=EarlyAccessUser
        fields=["email","created_at"]

    def validate_email(self,value):
        if EarlyAccessUser.objects.filter(email=value).exists():
            raise serializers.ValidationError("You;ve already Signed up!")
        return value