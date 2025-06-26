from django.forms import SlugField
from django.shortcuts import render
from rest_framework.decorators import api_view
from .models import Cart, CartItem, Product
from .serializers import CartItemSerializer, DetailedProductSerializer, ProductSerializer
from rest_framework.response import Response
from django.shortcuts import get_object_or_404

# Create your views here.
        
        
@api_view (["GET"])       
def products(request):
    products =Product.objects.all()
    serializer=ProductSerializer(products,many=True)
    return Response(serializer.data)


@api_view (["GET"])       
def product_detail(request,slug):
    product =Product.objects.get(slug=slug)
    serializer=DetailedProductSerializer(product)
    return Response(serializer.data)


@api_view(["POST"])
def add_item(request):
    cart_code=request.data.get("cart_code ")
    product_id=request.data.get("product_id")
    cart,created=Cart.objects.get_or_create(cart_code=cart_code)
    product= Product.objects.get(id=product_id)
