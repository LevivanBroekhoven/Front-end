namespace CompositionExample
{
    internal class Program
    {
        // What functionality do we need to add to this console app?

        // TODO A computer has a processor, a SSD disk and RAM memory.
        // TODO A processor has a clock speed.
        // TODO A disk has an operating system.
        // TODO An operating system has a name.

        static void Main(string[] args)
        {
            Console.WriteLine("Booting up the computer.");
            StartUpComputer();
            Console.WriteLine("The computer has booted up.");
        }

        static void StartUpComputer()
        {
            Processor processor = new Processor();
            Motherboard motherboard = new Motherboard(processor);

            motherboard.StartUp();
        }
    }
}