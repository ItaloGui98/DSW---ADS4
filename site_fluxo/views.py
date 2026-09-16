from django.shortcuts import render

# Create your views here.

from django.shortcuts import render


def home(request):
    return render(request, 'site_fluxo/home.html')

def portifolio(request):
    return render(request, 'site_fluxo/portifolio.html')

