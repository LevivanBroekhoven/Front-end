using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CompositionExample
{
    internal class Processor
    {
        public void StartUp()
        {
            Console.WriteLine("Starting the processor...");
            Console.WriteLine("Clock Speed is 2.5Ghz...");
        }
    }
}
