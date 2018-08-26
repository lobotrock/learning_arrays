# learning_arrays
Demo on showing the utility of arrays

## How to run
Pre-req: [Docker](https://docs.docker.com/install/#supported-platforms) must be installed.

```bash
git clone https://github.com/lobotrock/learning_arrays.git
cd learning_arrays/
docker build -t learning_arrays .
docker run -h 0.0.0.0 -p 8080:8080 -v $(pwd):/test -w /test --rm --name learning_arrays -it learning_arrays

```

## Pages
| URL | Demo |
|----|----|
| http://localhost:8080/IceCreamShop.html | Simple ice cream order done with variables |
| http://localhost:8080/BetterIceCreamShop.html | Ice cream order with multiple scoops, without array |
| http://localhost:8080/BestIceCreamShop.html | Ice cream order with multiple scoops and arrays |