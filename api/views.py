from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics
from .serializers import UserinfoSerilizer
from .models import Userinfo
# Create your views here.

def main(request):
    return HttpResponse("Hello")

class UserinfoView(generics.CreateAPIView):
    queryset = Userinfo.objects.all()
    serializer_class = UserinfoSerilizer
