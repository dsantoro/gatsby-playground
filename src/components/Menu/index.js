import React, { useState } from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Menu({ items }) {
    const [toggle, setToggle] = useState(true);
    const toggleMenu = () => {
        setToggle(!toggle);
    }
    return (
        <ul className="list-none hidden xl:flex py-6 items-center">
            {toggle ? items.map(item => (
                item.external
                    ? (
                        <li key={item.id}>
                            <a onClick={item.hasfunction ? () => toggleMenu() : null} className="text-xs uppercase font-semibold ml-6 tracking-wide hover:text-blue-400 transition duration-500 ease-in-out text-orange-100" href={item.link} target={item.target}><span className={item.className}>{item.title}</span></a>
                        </li>
                    ) : (
                        <li key={item.id}>
                            <Link className="text-xs uppercase font-semibold ml-6 tracking-wide hover:text-blue-400 transition duration-500 ease-in-out text-orange-100" to={item.link}>{item.title}</Link>
                        </li>
                    )
            )) : (
                    <li>
                        <button onClick={() => toggleMenu()} className="text-sm uppercase font-semibold ml-6 text-orange-100" href="#"><span className="p-2 px-3 bg-teal-400 inline-block"><FontAwesomeIcon icon={faBars} /></span></button>
                    </li>
                )
            }
        </ul>
    );
}

export default Menu;
