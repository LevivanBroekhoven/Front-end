using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CompositionExample
{
    internal class Motherboard
    {
        public Processor processor;

        public Motherboard(Processor processor)
        {
            this.processor = processor;
        }

        public void StartUp()
        {
            Console.WriteLine("Starting the motherboard.");
            processor.StartUp();
        }
    }
}
