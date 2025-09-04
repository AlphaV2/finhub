from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import permission_classes

from django.shortcuts import render
@api_view(["GET"])
def landing_page(request):
    return render(request, "landing/index.html")

@api_view(["GET"])
def home(request):
    return Response({
        "message": "Welcome to FinHub!",
        "login_url": "/api/auth/login/",
        "signup_url": "/api/auth/register/",
    })

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def dashboard(request):
    user = request.user
    return Response({
        "message": f"Welcome back, {user.first_name or user.username}!",
        "email": user.email,
        "docs_uploaded": user.tax_documents.count() if hasattr(user, "tax_documents") else 0
    })
