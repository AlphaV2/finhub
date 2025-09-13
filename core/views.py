from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import permission_classes

from django.shortcuts import render

from django.shortcuts import redirect
from django.contrib import messages
from django.views.decorators.csrf import csrf_exempt
@api_view(["GET"])
def landing_page(request):
    return render(request, "landing/index.html")



# @api_view(["GET"])
# @permission_classes([IsAuthenticated])
# def dashboard(request):
#     user = request.user
#     return Response({
#         "message": f"Welcome back, {user.first_name or user.username}!",
#         "email": user.email,
#         "docs_uploaded": user.tax_documents.count() if hasattr(user, "tax_documents") else 0
#     })



@csrf_exempt
def early_access_signup(request):
    if request.method == "POST":
        email = request.POST.get("email")
        if email:
            # TODO: save email to DB or a mailing list
            messages.success(request, "Thanks for signing up for early access!")
        else:
            messages.error(request, "Please enter a valid email.")
        return redirect("landing")  # redirect back to landing page
    return redirect("landing")
