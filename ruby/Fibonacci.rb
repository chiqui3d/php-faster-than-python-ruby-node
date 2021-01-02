def fibonacci(n)
  return  n  if ( 0..1 ).include? n
  (fibonacci(n - 1) + fibonacci( n - 2 ))
end
start = Time.now
fibonacci(22)
p Time.now - start