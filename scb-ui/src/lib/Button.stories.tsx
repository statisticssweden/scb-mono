import React from 'react'
import { Button } from './Button'

export default {
  title: 'Button',
  component: Button,
}

export const Primary = () => <Button>Klicka här</Button>
export const Secondary = () => <Button variant='secondary'>Och här</Button>