import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

export const MENU = [
    {
        id: 1,
        title: 'Sobre Nós',
        link: '/sobre-nos',
        external: false
    },
    {
        id: 2,
        title: 'Coleções',
        link: '/colecoes',
        external: false
    },
    {
        id: 3,
        title: 'Como Funciona',
        link: '/como-funciona',
        external: false
    },
    {
        id: 4,
        title: 'Onde Encontrar',
        link: '/onde-encontrar',
        external: false
    },
    {
        id: 5,
        title: 'Loja Virtual',
        link: 'http://www.google.com',
        external: true,
        target: '_blank'
    },
    {
        id: 6,
        title: 'Blog',
        link: '/blog',
        external: false
    },
    {
        id: 7,
        title: 'Contato',
        link: '/contato',
        external: false
    },
    {
        id: 8,
        title: <FontAwesomeIcon icon={faBars} />,
        link: '#',
        external: true,
        className: 'p-2 px-3 bg-teal-400 inline-block',
        hasfunction: true
    },
    {
        id: 9,
        title: <FontAwesomeIcon size="lg" icon={faFacebookSquare} />,
        link: 'http://www.google.com',
        external: true,
        target: '_blank'
    },
    {
        id: 10,
        title: <FontAwesomeIcon size="lg" icon={faInstagram} />,
        link: 'http://www.google.com',
        external: true,
        target: '_blank'
    },
    {
        id: 11,
        title: <FontAwesomeIcon size="lg" icon={faYoutube} />,
        link: 'http://www.google.com',
        external: true,
        target: '_blank'
    },
]