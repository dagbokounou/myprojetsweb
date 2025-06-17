from django.db import models


class Product(models.Model):
    CATEGORY=(("Electronics","ELECTRONICS"),
              ("Groceries","GROCERIES"),
              ("Clothings","CLOTHINGS")
              )
    name=models.CharField(max_length=100)
    slug=models.SlugField(blank=True,null=True)
    image=models.ImageField(upload_to="img")
    description=models.TextField(blank=True,null=True)
    

# Create your models here.
