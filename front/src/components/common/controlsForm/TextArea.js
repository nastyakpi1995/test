import React from "react";
import s from './controlsForm.module.css'

export const FormControl = (props) => {
    const isError = props.meta.touched && props.meta.error
    return (
        <div className={s.formControl + " " + (isError ? s.error : '')}>
            <div>
                {props.children}
            </div>
            {isError ? (
                <span>{ props.meta.error}</span>
            ) : null}

        </div>
    )
}

export const TextArea = (props) => {
    return (
        <FormControl  {...props}>
            <textarea {...props.input}{...props} />
        </FormControl>
    )
}

export const Input = (props) => {
    return (
        <FormControl {...props}>
            <input {...props.input}{...props} />
        </FormControl>
    )
}
