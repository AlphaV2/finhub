from django.http import JsonResponse
from django.shortcuts import render, redirect
from django.contrib import messages
from .models import EarlyAccessUser

def early_access_signup(request):
    if request.method == "POST":
        email = request.POST.get("email")

        if not email:
            messages.error(request, "Email is required.")
            return redirect("landing")

        #(case-insensitive check)
        email = email.strip().lower()

        if EarlyAccessUser.objects.filter(email__iexact=email).exists():
            messages.warning(request, "You’re already signed up for early access!")
        else:
            EarlyAccessUser.objects.create(email=email)
            messages.success(request, "Thanks for joining early access!")

        return redirect("landing")  # Always redirect to landing

    return redirect("landing")
