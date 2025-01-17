## Brownian

[![](https://img.shields.io/badge/docs-dev-blue.svg)](https://pnavaro.github.io/Brownian.jl/dev)

*I upgrade the package https://github.com/UniversityofWarwick/Brownian.jl to julia 1.6 but i am not sure it is working well. Please use it with caution. Pierre Navaro.*

The Julia `Brownian` package is aimed at providing a centralized repository of algorithms for simulating Brownian-based
stochastic processes. More precisely, the package currently provides routines for random sampling from
* one-dimensional Brownian motion via random walk,
* one-dimensional fractional Brownian motion (FBM) and one-dimensional fractional Gaussian noise (FGN) via the Cholesky
decomposition method or the Davies-Harte method, which makes use of fast Fourier transforms,
* one-dimensional Riemann-Liouville fractional Brownian motion (FBM) via an exact discrete method.

### Short tutorial

### Example 1: simulation of Brownian motion

To simulate Brownian motion at the 100 time points from 0 to 1, use the following snippet:

```
using Brownian
using Plots

t = LinRange(0,1,100)
p = BrownianMotion(t)

plot(t, rand(p))
plot!(t, rand(p))
```

![example1](docs/src/assets/example1.png)

### Example 2: simulation of FBM and FGN

Suppose that interest is in simulating fractional Brownian motion with Hurst index equal to 0.4 in the time interval
[0, 1] with a time step of 1/2^n for some natural n (for example n=10).

```
using Brownian

p = FBM(0:1/2^10:1, 0.4)

# Using the Davies-Harte algorithm, which relies on fast Fourier transforms (FFT)
rand(p)

# Using a method based on the Cholesky decomposition of the covariance matrix of FBM
rand(p, method=:chol)

# Using an exact discrete method for simulating Riemann-Liouville FBM
rand(p, method=:rl)
```

To simulate fractional Gaussian noise with the same Hurst index,

```
# Using the Davies-Harte algorithm
rand(p, fbm=false)

# Using the Cholesky method
rand(p, fbm=false, method=:chol)
```

Note that fractional Brownian motion is obtained from fractional Gaussian noise by taking cumulative sums (and
conversely FGN is computed from FBM by differencing).
