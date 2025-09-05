from django.urls import path
from . import views

urlpatterns = [
    path("signup/", views.early_access_signup, name="early_access_signup"),
]
