from django.urls import path
from .views import main , UserinfoView
urlpatterns = [
    path('' ,main),
    path('userinfo', UserinfoView.as_view())
]
