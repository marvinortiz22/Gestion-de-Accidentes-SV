from django import forms
from .choices import Departamentos, Filtros
from .models import DatosExtra, ReporteAccidente
from django.contrib.auth.forms import AuthenticationForm, UserCreationForm
from django.contrib.auth.models import User

class AccidenteForm(forms.ModelForm):
    descripcion=forms.CharField(max_length=100, widget=forms.Textarea(attrs={'rows':'3'}))
    departamento=forms.ChoiceField(choices=Departamentos)
    class Meta:
        model=ReporteAccidente
        exclude=['user','municipio']

class DatosExtraForm(forms.ModelForm):
    cantVictimas=forms.IntegerField(min_value=0, label="Cantidad de victimas", required=False)
    class Meta:
        model=DatosExtra
        exclude=['accidente']
      
class FiltroForm(forms.Form):
    filtrar_por=forms.ChoiceField(choices=Filtros)
    buscar=forms.CharField()

class loginForm(AuthenticationForm):
    username=forms.IntegerField(label="DUI",min_value=0, max_value=999999999)
    class Meta:
        fields='__all__'
    
        
   

class RegistroForm(UserCreationForm):
    username=forms.IntegerField(label="DUI",min_value=0, max_value=999999999)
    class Meta:
        model=User
        fields=['username','password1','password2']
    

    def __init__(self, *args, **kwargs):
        super(RegistroForm, self).__init__(*args, **kwargs)
        self.fields['username'].help_text = ''


