from rest_framework import serializers
from .models import CustomUser

class CustomUserSerializer(serializers.ModelSerializer):
    confirm_password = serializers.CharField(write_only=True)

    class Meta:
        model = CustomUser
        fields = ['id', 'username', 'email', 'password', 'confirm_password']
        extra_kwargs = {
            'password': {'write_only': True},  # Ensure the password is not exposed in responses
            'confirm_password': {'write_only': True},  # Ensure confirm_password is write-only
        }

    def validate(self, attrs):
        if attrs['password'] != attrs['confirm_password']:
            raise serializers.ValidationError({"password": "Passwords do not match"})
        return attrs

    def create(self, validated_data):
        # Remove `confirm_password` from validated data
        validated_data.pop('confirm_password')
        
        # Directly save the CustomUser instance with all validated data
        return CustomUser.objects.create(**validated_data)
