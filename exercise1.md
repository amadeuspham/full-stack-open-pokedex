# 11.1 Warming up

I’ll pick Python to be the development language of this hypothetical project. Before going any further I should elaborate that my knowledge and usage of Python generally concerns scripts only, for machine learning related purposes, so the idea of building/packaging is foreign to me. 

## Linting, testing and building

### Linting
One of the popular and easy-to-use tools for Python linting is [Black](https://github.com/psf/black/blob/master/README.md), which automatically formats Python code to conform to the conventional PEP 8 coding style. Quoting from its GitHub READMEÖ
: “by using it, you agree to cede control over minutiae of hand-formatting. In return, Black gives you speed, determinism, and freedom from pycodestyle nagging about formatting.” This means all formatting is done by Black itself according to the style rules - the developers have little configuration over it. Using Black is very easy - you can use it as a script or a package on the command line:

Install Black:
```
pip install black
```
Use Black as a script:
```
black {source_file_or_directory}
```
Use Black as a package:
```
python -m black {source_file_or_directory}
```
Of course, the minimal configuration allowed can be a disadvantage as well - especially when other tools used in the project do not conform to PEP 8. But an undeniable advantage of it is that the developers can forget manual formatting and styling, and just let the tool do the work.

### Testing
[pytest](https://docs.pytest.org/en/stable/) is considered the common choice when Python testing is concerned. Writing, setting up and running tests is very simple - not much different from its Javascript counterparts (Jest/Mocha/etc.). 

Install pytest:
```
pip install -U pytest 
```
Here’s a test sample from pytest’s official documentation:
```
# content of test_sample.py
def func(x):
    return x + 1

def test_answer():
    assert func(3) == 5
```
By running pytest, the tool will run all files whose names are of the format `test_*.py` or `*_test.py` (again, not too different from its JS counterparts). Developers can also group tests in a class to better categorise testing.

### Building
As stated in the beginning, I’ve never built a Python package before, but after some Googling I’ve found a Python package called [setuptools](https://pypi.org/project/setuptools/) that looks like it would do the job. As claimed on its official website, setuptools allows developer to easily build and distribute Python packages. The docs also explains the basic usage with 4 steps:

- Install setuptools using pip.
- Create `pyproject.toml` with information that indicates you want to use setuptools for your project.
- Create `setup.cfg` to specify package information (metadata, dependencies, etc.)
- Use an installer (which can be installed by pip) to produce the distribution (a `.tar.gz` or `.whl` file in dist folder). This is what can be uploaded to PyPI for distribution.

## Alternatives to set up CI besides Jenkins and GitHub Actions
There are a few alternatives to Jenkins & GitHub Actions. In this essay I’ll present 2 of the most popular alternatives: [Travis CI](http://travis-ci.org) and [CircleCI](http://circleci.com). Both are very similar: cloud-based CI platforms that offer enterprise solutions that act as self-hosted variants, supporting a wide range of languages, supporting running tests on Docker, supporting Ubuntu and macOS, compatible with Github and Bitbucket. There are quite a few differences, however: Travis CI allows running both Linux and macOS at the same time, and it supports a lot more languages without configuration. 

The choice of what to choose boils down to the project itself - CircleCI might be better for small projects where integration is focused on being done as fast as possible, while Travis CI, due to its support for a wider range of environments, should be used for open-source projects, in general.

## Self-hosted vs cloud-based environment
The biggest selling point of self-hosted CI environments is that they offer a lot of configurations and extensibility. Customisation can be done a lot more freely than in cloud-based counterparts, and this can prove to be very beneficial to a lot of niche applications. Scalability is also an advantage, since self-hosted system are billed on the hardware, so building for a long time is not an issue. This is not true for cloud-based environment, however: the bill is tied to the build time, so scaling an application would be an issue. And since cloud-based solutions offer less flexibility, finding the right fit for your niche product can be sometimes challenging. 

However, while lacking in flexibility and scalability, cloud-based platforms give developers cheap, simple and zero-maintenance solutions. Setting up a CI environment using Travis CI, for example, is relatively straightforward, and there’s no hardware to maintain, translating to zero costs for maintenance as well as personnel. Cloud-based services are also generally free for open-source projects, so they are the common choice for small open-source projects nowadays that do not require the level of flexibility or scalability that self-hosted environments provide. 