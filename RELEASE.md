- To release a new version of ipybus on PyPI:

Update _version.py (set release version, remove 'dev')
git add the _version.py file and git commit
```
python setup.py sdist
python setup.py bdist_wheel
git tag -a X.X.X -m 'comment'
twine upload dist/*

twine upload --repository-url https://upload.pypi.org/legacy/ dist/*
```
Update _version.py (add 'dev' and increment minor)
git add and git commit
git push
git push --tags

- To release a new version of ipybus on NPM:

Update `js/package.json` with new npm package version

```
# clean out the `dist` and `node_modules` directories
git clean -fdx
cd js
npm install
npm adduser
npm publish
```

Install in target
-----------------

```
jupyter lab build --dev-build=False --minimize=False
```