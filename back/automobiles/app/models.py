from django.db import models

# Create your models here.
class React(models.Model):
  v1 = models.CharField(max_length=200)
  v2 = models.CharField(max_length=200)
  v3 = models.CharField(max_length=200)
  