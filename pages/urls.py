from django.urls import path

# bring in the views
from . import views

urlpatterns = [
    path('', views.index, name='index'), #root or home view
    path('about', views.about, name='about')
]
