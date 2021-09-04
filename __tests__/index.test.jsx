/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '../pages/index'
import Accounts from '../pages/accounts'

describe('Home', () => {
    it('renders a home', () => {
        render(<Home />)

        const heading = screen.getAllByRole('heading', {
            name: /Accounts Management/i,
        })

        expect(heading[0]).toBeInTheDocument()

        const linkToPage2 = screen.getByText('Accounts Search')

        expect(linkToPage2).toBeInTheDocument()
    })
})