import { writable } from 'svelte/store';

export const unidades = writable([
    {
        id: 1,
        nombre: 'Cabaña Familiar Aire',
        capacidad: 'Hasta 5 personas',
        foto: '/fotos/familiar/1.jpeg',
        tipo: 'Familiar',
        galeria: [
            '/fotos/familiar/1.jpeg',
            '/fotos/familiar/2.jpeg',
            '/fotos/familiar/3.jpeg',
            '/fotos/familiar/4.jpeg',
            '/fotos/familiar/5.jpeg',
            '/fotos/familiar/6.jpeg',
            '/fotos/familiar/7.jpeg',
            '/fotos/familiar/8.jpeg',
            '/fotos/familiar/9.jpeg',
            '/fotos/familiar/10.jpeg',
            '/fotos/familiar/11.jpeg',
            '/fotos/familiar/12.jpeg',
            '/fotos/familiar/13.jpeg',
            '/fotos/familiar/14.jpeg'
        ],
        descripcion:
            'Nuestra unidad más completa. Pensada para que cada integrante de la familia tenga su espacio de relax, con un asador techado ideal para compartir momentos únicos.',
        detalles: {
            capacidad: 'Hasta 5 personas',
            distribucion: 'Dormitorios separados para máxima privacidad de los padres',
            equipamiento: [
                'Heladera con freezer grande',
                'Cocina con horno completo',
                'Amplio asador individual techado',
                'Sala comedor integrada y espaciosa',
                'Baño completo con ducha'
            ]
        }
    },
    {
        id: 2,
        nombre: 'Cabaña Familiar Fuego',
        capacidad: 'Hasta 5 personas',
        foto: '/fotos/familiar2/1.jpeg',
        tipo: 'Familiar',
        galeria: [
            '/fotos/familiar2/1.jpeg',
            '/fotos/familiar2/2.jpeg',
            '/fotos/familiar2/3.jpeg',
            '/fotos/familiar2/4.jpeg',
            '/fotos/familiar2/5.jpeg',
            '/fotos/familiar2/6.jpeg',
            '/fotos/familiar2/7.jpeg',
            '/fotos/familiar2/8.jpeg',
            '/fotos/familiar2/9.jpeg',
            '/fotos/familiar2/10.jpeg',
            '/fotos/familiar2/11.jpeg'
        ],
        descripcion:
            'Espacios luminosos y frescos. El refugio perfecto para desconectar del ruido y disfrutar de la cercanía del río con la seguridad y calidez de un hogar.',
        detalles: {
            capacidad: 'Hasta 5 personas',
            distribucion: 'Habitaciones independientes para un descanso sin interrupciones',
            equipamiento: [
                'Heladera con freezer',
                'Cocina con horno completo',
                'Asador individual privado',
                'Living comedor funcional',
                'Baño completo sanitizado'
            ]
        }
    },
    {
        id: 3,
        nombre: 'Departamento Matrimonial Agua',
        capacidad: '2 personas',
        foto: '/fotos/matrimonial/1.jpeg',
        tipo: 'Matrimonial',
        galeria: [
            '/fotos/matrimonial/1.jpeg',
            '/fotos/matrimonial/2.jpeg',
            '/fotos/matrimonial/3.jpeg',
            '/fotos/matrimonial/4.jpeg',
            '/fotos/matrimonial/5.jpeg',
            '/fotos/matrimonial/6.jpeg',
            '/fotos/matrimonial/7.jpeg',
            '/fotos/matrimonial/8.jpeg',
            '/fotos/matrimonial/9.jpeg',
            '/fotos/matrimonial/10.jpeg',
            '/fotos/matrimonial/11.jpeg',
            '/fotos/matrimonial/12.jpeg',
            '/fotos/matrimonial/13.jpeg',
            '/fotos/matrimonial/14.jpeg'
        ],
        descripcion:
            'Diseñado para el silencio absoluto. Ideal para parejas que buscan una escapada de desconexión con la comodidad de estar a pasos de los mejores paseos.',
        detalles: {
            capacidad: '2 personas exclusivamente',
            distribucion: 'Ambiente integrado optimizado para la intimidad',
            equipamiento: [
                'Heladera con freezer',
                'Vajilla completa para dos',
                'Ubicación en la zona más silenciosa',
                'Balcón privado con vista al entorno',
                'Baño en suite impecable'
            ]
        }
    },
    {
        id: 4,
        nombre: 'Departamento Matrimonial Tierra',
        capacidad: '2 personas',
        foto: '/fotos/matrimonial2/1.jpeg',
        tipo: 'Matrimonial',
        galeria: [
            '/fotos/matrimonial2/1.jpeg',
            '/fotos/matrimonial2/2.jpeg',
            '/fotos/matrimonial2/3.jpeg',
            '/fotos/matrimonial2/4.jpeg',
            '/fotos/matrimonial2/5.jpeg',
            '/fotos/matrimonial2/6.jpeg',
            '/fotos/matrimonial2/7.jpeg',
            '/fotos/matrimonial2/8.jpeg',
            '/fotos/matrimonial2/9.jpeg',
            '/fotos/matrimonial2/10.jpeg',
            '/fotos/matrimonial2/11.jpeg',
            '/fotos/matrimonial2/12.jpeg'
        ],
        descripcion:
            'Luminosidad y confort en una ubicación privilegiada. Disfrutá de la brisa del río desde tu ventana en un entorno de paz absoluta.',
        detalles: {
            capacidad: '2 personas exclusivamente',
            distribucion: 'Espacio abierto, moderno y muy luminoso',
            equipamiento: [
                'Heladera con freezer',
                'Vajilla y utensilios completos',
                'Cercanía inmediata al sector de río',
                'Balcón con aire serrano',
                'Baño privado con excelente presión'
            ]
        }
    },
    {
        id: 5,
        nombre: 'Eter',
        capacidad: '2 personas',
        foto: '/fotos/habitacion/1.jpeg',
        tipo: 'Funcional',
        galeria: [
            '/fotos/habitacion/1.jpeg',
            '/fotos/habitacion/2.jpeg',
            '/fotos/habitacion/3.jpeg',
            '/fotos/habitacion/4.jpeg',
            '/fotos/habitacion/5.jpeg',
            '/fotos/habitacion/6.jpeg',
            '/fotos/habitacion/7.jpeg',
            '/fotos/habitacion/8.jpeg',
            '/fotos/habitacion/9.jpeg',
            '/fotos/habitacion/10.jpeg'
        ],
        descripcion:
            'Nuestra opción más inteligente para viajeros activos. Tenés tu propia cocina y asador privado pagando el precio de una habitación de hotel.',
        detalles: {
            capacidad: '2 personas',
            distribucion: 'Monoambiente tipo estudio, práctico y seguro',
            equipamiento: [
                'Heladera con congelador compacta',
                'Anafe y horno para comidas rápidas',
                'Asador individual frente a la unidad',
                'Cama matrimonial confortable',
                'Baño privado completo'
            ]
        }
    }
]);