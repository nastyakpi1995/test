import React from "react";
import { create } from 'react-test-renderer'
import ProfileInfo from "./ProfileInfo";

describe('ProfileInfo   ', () => {
    test('it shows the expected text when clicked (testing the wrong way!)', () => {
        const userProfile = {img: '', status: 'heeelllo'}
        const component = create(<ProfileInfo userProfile={userProfile} />)
        const instance = component.getInstance()
        console.log('instance', instance)
        expect(instance.state.status).toBe("heeelllo")
    })
})
