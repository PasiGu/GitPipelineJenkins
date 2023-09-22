install:
    npm install

build: install
    echo "Building..."


test: build
    npm test

deploy: test
    echo "Deploying..."
    npm start

clean:
    rm -rf node_modules
