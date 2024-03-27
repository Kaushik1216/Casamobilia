## translate model into Json response
from rest_framework import serializers
from .models import Userinfo

class UserinfoSerilizer(serializers.ModelSerializer):
    class Meta:
        model = Userinfo
        fields = ('id','username','firstname','lastname','creationtime')