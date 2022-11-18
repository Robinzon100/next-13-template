"use client"

import Link, { LinkProps } from 'next/link';
import React, { ButtonHTMLAttributes, cloneElement, CSSProperties, FC, forwardRef, LegacyRef, MouseEvent, MouseEventHandler, SVGProps, useMemo } from 'react';
import c from './Button.module.scss';
export type SVGComponent = FC<SVGProps<SVGSVGElement>>;


interface ButtonBaseProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    padding: number[],
    theme: 'white' | 'black' | 'blue',
    children: JSX.Element[] | JSX.Element,
    onHover?: MouseEventHandler,
    bgColor?: string,
    StartIcon?: JSX.Element,
    EndIcon?: JSX.Element,
}


export type ButtonProps = ButtonBaseProps &
    (
        | (Omit<JSX.IntrinsicElements["a"], "href"> & { href: LinkProps["href"]; })
        | (& { href?: never; })
    );






const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    padding,
    theme,
    className,
    id,
    disabled,
    children,
    style,
    onClick,
    onHover,
    href,
    StartIcon,
    EndIcon }, ref) => {


    const buttonPropStyles = useMemo((): CSSProperties => {
        return {
            cursor: `${disabled ? 'not-allowed' : 'pointer'}`,
            padding: `
                calc(${padding[0]} * .1vw) calc(${padding[1]} * .1vw)
                calc(${padding[2]} * .11vw) calc(${padding[3]} * .1vw)`,
            color: `${theme === 'white' ? 'var(--black)' : 'var(--white)'}`,
        };
    }, [padding, disabled, theme]);




    const _onClick = (e: MouseEvent<HTMLButtonElement>) => {
        if (disabled || !onClick) {
            return;
        }
        onClick(e);
    };



    return (
        <>
            {!href ?
                (
                    <button
                        ref={ref as LegacyRef<HTMLButtonElement>}
                        className={`${c.button} ${c[`${theme}`]} ${className}`}
                        id={`${id}`}
                        disabled={disabled}
                        onClick={(e) => _onClick(e)}
                        onMouseOver={onHover}
                        style={style}>

                        <div
                            className={c.button_container}
                            style={buttonPropStyles}>
                            {StartIcon && (
                                cloneElement(StartIcon, {
                                    style: {
                                        transform: 'translate(-50%, 0%)',
                                    }
                                })
                            )}

                            {children}

                            {EndIcon && (
                                cloneElement(EndIcon, {
                                    style: {
                                        transform: 'translate(50%, 0%)',
                                    }
                                })
                            )}
                        </div>
                    </button>
                ) : (
                    <Link href={`${disabled ? "#" : href}`} passHref>
                        <a>
                            <div
                                ref={ref as LegacyRef<HTMLDivElement>}
                                className={`${c.button} ${c[`${theme}`]} ${className}`}
                                id={`${id}`}
                                onMouseOver={onHover}
                                style={style}>

                                <div
                                    className={c.button_container}
                                    style={buttonPropStyles}>
                                    {StartIcon && (
                                        cloneElement(StartIcon, {
                                            style: {
                                                transform: 'translate(-50%, 10%)',
                                            }
                                        })
                                    )}

                                    {children}

                                    {EndIcon && (
                                        cloneElement(EndIcon, {
                                            style: {
                                                transform: 'translate(50%, 10%)',
                                            }
                                        })
                                    )}
                                </div>
                            </div>
                        </a>
                    </Link>
                )
            }
        </>
    );
});



Button.displayName = 'Button';
export default Button;