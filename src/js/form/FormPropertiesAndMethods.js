import React, { useEffect } from 'react';

const FormPropertiesAndMethods = () => {

    useEffect(() => {
        const forma = document.forms['firstForm'];
        const elem = forma.elements['one'];
        // console.log();
        const slecte = elem.form.elements.some
        const optoin = new Option('classic', 'classic', true, true)
        slecte.appendChild(optoin)
    });

    return (
        <div>
            <form name={'firstForm'}>
                <input type="text" name={'one'} value={1}/>
                <fieldset name="radious">
                    <input type="radio" name="age" value="10" />
                    <input type="radio" name="age" value="20" />
                </fieldset>
                <select id="genres" name={'some'}>
                    <option value="rock">Rock</option>
                    <option value="blues" selected>Blues</option>
                </select>
            </form>
        </div>
    );
};

export default FormPropertiesAndMethods;