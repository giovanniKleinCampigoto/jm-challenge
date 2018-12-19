const Button = require('./Button')


test("Should render a Button", () => {
    const wrapper = shallow(
        <Button />
    );
    expect(wrapper).toMatchSnapshot();
})