from django.contrib import admin
from .models import Reporte, DatosExtra, ReporteAccidente

class ReporteAdmin(admin.ModelAdmin):
    list_display=('id','accidente','user')
    search_fields=('accidente__id',)
class AccidenteAdmin(admin.ModelAdmin):
    list_display=('id','departamento','municipio','lugar','descripcion','fecha','user')
    search_fields= ('id','departamento','municipio','lugar','descripcion','latitud','longitud')
    list_filter= ('departamento','municipio')
    date_hierarchy="fecha"
class DatosExtraAdmin(admin.ModelAdmin):
    list_display=('id','accidente','cantVictimas','foto',)
    search_fields= ('id','cantVictimas','foto','accidente__id')
    list_filter=('accidente'),
admin.site.register(Reporte, ReporteAdmin)
admin.site.register(ReporteAccidente, AccidenteAdmin)
admin.site.register(DatosExtra, DatosExtraAdmin)
# Register your models here.
