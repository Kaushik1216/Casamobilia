from django.db import models

# Create your models here.
class Userinfo(models.Model):
    username = models.CharField(max_length=50 , default="", unique = True)
    firstname = models.CharField(max_length=50)
    lastname = models.CharField(max_length=50)
    creationtime = models.DateTimeField(auto_now_add=True)