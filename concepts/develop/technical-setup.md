### tutotrial
https://www.youtube.com/watch?v=0-S5a0eXPoc

- setup node env
	node -v

- install expo
npm i -g expo-cli

- install expo client on phone

- install vscode

    on linux:
    
    ```bash
    sudo nano /etc/sysctl.conf
    
    # add at the bottom
    fs.inotify.max_user_watches=524288

    sudo sysctl -p
    ```

  - install extensions
    - react native tools
    - react-native/react/redux snippets
    - prettier - code formatter
    - material icon theme

- create expo project
	expo init app-name

- open in code
	code .

- start expo server to serve app
    yarn start

- start emulator
    emulator @Pixel_3_API_29

- debug
    in emulator CTRL + M