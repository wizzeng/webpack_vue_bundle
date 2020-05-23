const fake_jQuery = () => ({
    ajax: () => {
        console.log('Calling fake_jQuery');
        return Promise.resolve();
    }
});

window.fake_jQuery = fake_jQuery();
