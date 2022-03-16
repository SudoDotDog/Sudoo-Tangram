# Paths
build := typescript/tsconfig.build.json
dev := typescript/tsconfig.dev.json

# NPX functions
tsc := node_modules/.bin/tsc
start-storybook := node_modules/.bin/start-storybook
build-storybook := node_modules/.bin/build-storybook
mocha := node_modules/.bin/mocha
ts_node := node_modules/.bin/ts-node
eslint := node_modules/.bin/eslint
nyc := node_modules/.bin/nyc

# Build functions
build_utils := node_modules/.bin/build-utils
license_package := node_modules/.bin/license-package

main: run

run: 
	@echo "[INFO] Starting Storybook Environment"
	@NODE_ENV=development $(start-storybook) -p 9009

story:
	@echo "[INFO] Building Storybook Page"
	@NODE_ENV=development $(build-storybook)

build:
	@echo "[INFO] Building for production"
	@NODE_ENV=production $(tsc) --p $(build)

tests:
	@echo "[INFO] Testing with Mocha"
	@NODE_ENV=test \
	$(mocha) --config test/.mocharc.json

cov:
	@echo "[INFO] Testing with Nyc and Mocha"
	@NODE_ENV=test \
	$(nyc) $(mocha) --config test/.mocharc.json

lint:
	@echo "[INFO] Linting"
	@NODE_ENV=production \
	$(eslint) . --ext .ts,.tsx \
	--config ./typescript/.eslintrc.json

lint-fix:
	@echo "[INFO] Linting and Fixing"
	@NODE_ENV=development \
	$(eslint) . --ext .ts,.tsx \
	--config ./typescript/.eslintrc.json --fix

install:
	@echo "[INFO] Installing Development Dependencies"
	@yarn install --production=false

install-prod:
	@echo "[INFO] Installing Production Dependencies"
	@yarn install --production=true

outdated: install
	@echo "[INFO] Checking Outdated Dependencies"
	@yarn outdated

license: clean
	@echo "[INFO] Sign files"
	@NODE_ENV=development $(license_package) license app

clean:
	@echo "[INFO] Cleaning release files"
	@NODE_ENV=development $(build_utils) clean-path app

publish: install tests lint license build
	@echo "[INFO] Publishing package"
	@cd app && npm publish --access=public

publish-dry-run: install tests lint license build
	@echo "[INFO] Publishing package"
	@cd app && npm publish --access=public --dry-run

ts-version:
	@echo "[INFO] Getting TypeScript Version"
	@NODE_ENV=development $(tsc) --version
