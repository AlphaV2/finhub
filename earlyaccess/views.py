from django.shortcuts import render, redirect
from django.contrib import messages
from .models import EarlyAccessUser

def early_access_signup(request):
    if request.method == "POST":
        email = request.POST.get("email")
        if EarlyAccessUser.objects.filter(email=email).exists():
            messages.error(request, "You’re already signed up for early access!")
        else:
            EarlyAccessUser.objects.create(email=email)
            messages.success(request, "Thanks for joining early access!")
        return redirect("landing")  #  'landing' is in core/urls
    return redirect("landing")
