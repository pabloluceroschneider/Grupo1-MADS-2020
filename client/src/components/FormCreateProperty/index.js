import React, { useState, useEffect, useRef } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'







const FormProperty = () => {
    const firstInput = useRef(null);
    useEffect( () => {firstInput.current.focus()},[])

    return (
        <div className="form-property">
            <Form>
                <Form.Field>
                    <label>First Name</label>
                    <input ref={firstInput} placeholder='First Name' />
                </Form.Field>
            </Form>
        </div>
    )
}

export default FormProperty;