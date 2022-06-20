from django.db import models
from django.contrib.auth.models import User

class ReporteAccidente(models.Model):
    descripcion=models.CharField(max_length=100)
    latitud=models.CharField(max_length=50)
    longitud=models.CharField(max_length=50)
    lugar=models.CharField(max_length=50)
    departamento=models.CharField(max_length=20) 
    municipio=models.CharField(max_length=30)    
    fecha=models.DateTimeField(auto_now_add=True)
    user=models.ForeignKey(User, on_delete=models.CASCADE,verbose_name="usuario")
    def __unicode__(self):
        return self.nombre

    def __str__(self):
        return str(self.id)
    

class DatosExtra(models.Model):
    cantVictimas=models.IntegerField(blank=True,null=True, verbose_name="Cantidad de victimas")
    foto=models.ImageField(upload_to ='images',blank=True,null=True)
    accidente=models.OneToOneField(ReporteAccidente, on_delete=models.CASCADE)
    
class Reporte(models.Model):
    accidente=models.ForeignKey(ReporteAccidente, on_delete=models.CASCADE)
    user=models.ForeignKey(User, on_delete=models.CASCADE, verbose_name="usuario")

